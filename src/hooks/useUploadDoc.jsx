"use client";
import React, { useState } from "react";
import axios from "axios";
const useUploadDoc = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "heasyresource");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/heasyresource/raw/upload`,
        formData
      )
      .then((res) => {
        console.log(res, "upload file");
        setResponse(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        return err;
      });
  };
  return {
    response,
    error,
    loading,
    handleUpload,
  };
};

export default useUploadDoc;
