"use client";
import axios from "axios";
import React, { useState } from "react";

const useUploadImage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUpload = async (imgs) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", imgs[0].file);
    formData.append("upload_preset", "heasyresource");
    axios
      .post(
        `https://api.cloudinary.com/v1_1/heasyresource/image/upload`,
        formData
      )
      .then((res) => {
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
    handleUpload,
    response,
    error,
    loading,
  };
};

export default useUploadImage;
