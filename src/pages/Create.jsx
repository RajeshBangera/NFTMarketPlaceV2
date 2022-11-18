import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

import "../styles/create-item.css";
import { useDispatch, useSelector } from "react-redux";
import nftService from "../services/nftService";
import { DropzoneArea } from "material-ui-dropzone";

const item = {
  id: "01",
  title: "Guard",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 7.89,
};

const initialFormData = Object.freeze({
  price: "",
  midbid: "",
  startdate: "",
  expdate: "",
  title: "",
  description: "",
});

const Create = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, selectedFile);
    nftService.uploadNft(dispatch, formData, selectedFile);
  };

  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    {/* <input
                      type="file"
                      className="upload__input"
                      name="file"
                      onChange={changeHandler}
                    /> */}
                    <DropzoneArea
                      className="upload_i nput"
                      // sx={{
                      //   bgcolor: "background.paper",
                      //   boxShadow: 1,
                      //   borderRadius: 2,
                      //   p: 2,
                      //   minWidth: 300,
                      // }}
                      acceptedFiles={["image/*"]}
                      dropzoneText={"Drag and drop an image here or click"}
                      onChange={(files) => console.log("Files:", files)}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Amount</label>
                    <input
                      type="number"
                      placeholder="Enter Amount to Lend"
                      name="Amount"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Proposed Interest Rate</label>
                    <input
                      type="number"
                      placeholder="Enter your Proposed Interest Rate"
                      name="minbid"
                      onChange={handleChange}
                    />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input
                        type="date"
                        name="expdate"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      name="title"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name="description"
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    className="bid__btn d-flex align-items-center gap-1"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
