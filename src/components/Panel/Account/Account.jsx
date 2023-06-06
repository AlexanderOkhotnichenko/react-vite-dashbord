import React, { useContext, useRef, useState } from 'react';
import Swal from "sweetalert2";
import { AppContext } from '../../../App';
import avatar from "../../../assets/logo.webp";
import "./account.scss";

export function Account() {
  const { setPreviewURL } = useContext(AppContext);
  const hero = useRef();
  const input = useRef();

  const loadingPreview = () => {
    const file = input.current.files[0];
    const maxSize = 50000;

    if (!file) return;

    const loadingURL = () => {
      if (file["size"] > maxSize) {
        Swal.fire("The file size should not exceed 50 000!", "", "error");

        return;
      }
      const newURL = (hero.current.src = URL.createObjectURL(file));
      setPreviewURL(newURL);
    };
    loadingURL();
  };

  return (
    <div className="account-content">
    <div className="account-avatar">
      <label className="account-label" htmlFor="file-input">
        <img
          src={avatar}
          alt="Avatar"
          className="account-preview"
          ref={hero}
        />
        <input
          className="account-input"
          type="file"
          id="file-input"
          ref={input}
          onChange={loadingPreview}
        />
      </label>
    </div>
    <div className="account-description">
      <h4 className="account-description-title">
        Name: <span className="white">Jordan</span>
      </h4>
      <h4 className="account-description-title">
        Role: <span className="red">Admin</span>
      </h4>
      <h4 className="account-description-title">
        Status: <span className="green">Verified</span>
      </h4>
      <h4 className="account-description-title">
        Country: <span className="orange">Germany</span>
      </h4>
    </div>
    </div>
  )
}