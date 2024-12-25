import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { CloudUpload, Close } from "@mui/icons-material";

interface FileUploadProps {
  label: string;
  onFileChange: (files: File[]) => void;
  maxFiles?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  onFileChange,
  maxFiles = 5,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files
      ? Array.from(event.target.files)
      : [];
    const validFiles = uploadedFiles.filter((file) =>
      [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    );

    if (uploadedFiles.length !== validFiles.length) {
      alert("Only .docx and .pdf files are allowed.");
    }

    if (files.length + validFiles.length > maxFiles) {
      alert(`You can only upload up to ${maxFiles} files.`);
      return;
    }

    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);
    onFileChange(updatedFiles);

    // Clear the input after uploading files
    if (event.target) {
      event.target.value = "";
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileChange(updatedFiles);
  };

  return (
    <div>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 0,
          fontSize: "13px",
          marginLeft: "15px",
          fontWeight: "bold",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          border: "1px solid black",
          margin: 2,
          borderRadius: "20px",
          padding: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
          height: "200px",
        }}
      >
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUpload />}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "25%",
            backgroundColor: "#ffffff",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          Upload Files
          <input
            type="file"
            multiple
            hidden
            accept=".docx, .pdf"
            onChange={handleFileUpload}
          />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          padding: "10px",
        }}
      >
        {files.map((file, index) => (
          <Chip
            key={index}
            label={file.name}
            onDelete={() => handleRemoveFile(index)}
            sx={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              borderRadius: "16px",
              padding: "0 8px",
              fontSize: "14px",
            }}
            deleteIcon={<Close />}
          />
        ))}
      </Box>
    </div>
  );
};

export default FileUpload;
