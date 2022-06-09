import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

export const ClaimQ = () => {
  const form = useRef();
  const SOLSCAN = "solscan.io/"
    const regex = new RegExp(
      "(https?://)?"+ SOLSCAN +"[/\\w .-]*/?"
    );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function sendEmail (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7lhctnf",
        "template_hb7zy83",
        form.current,
        "GAyktw5BJ0aDCY2Wb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="showcase1 text-dark p-2 text-center text-sm-start">
        <div className="if-container container-fluid">
          <section className="mt-5 text-center">
            <p className="people-title">CLAIM YOUR QUBES HERE</p>

            <p className="q-tokenomics-showcase-intro-lead">
              Upon purchase of NFT, you will be able to claim your <br />
              QUBES within 24 hours.
            </p>
          </section>
          <section className="p-5">
            <div className="container contacts">
              <form ref={form} onSubmit={sendEmail}>
                {/* <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label> */}
                {/* <textarea name="message" />
                <input type="submit" value="Send" /> */}
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="col-md-3">
                    <span className="details">
                      SOLSCAN LINK&nbsp;
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        *
                      </span>
                    </span>
                    <br />
                    <input
                      name="message"
                      type="url"
                      required
                      className="form-control form-control-lg"
                      {...register("url", { required: {
                        value: true,
                        message: 'Enter Valid Solscan Link'
                      },
                    pattern:{
                      value:{regex},
                      message:'Please Enter Valid Solscan Link'
                    }
                   })}
                    />
                  </div>
                </div>
                <div className="col link d-flex align-items justify-content-center">
                  <div
                    className=""
                    style={{
                      width: "100px",
                    }}
                  >
                    <button
                      className="contact-send-button btn btn-lg rounded-pill"
                      type="submit"
                      value="Send"
                    >
                      submit
                    </button>
                  </div>
                </div>
                <div className="col link d-flex align-items justify-content-center"
                    id="errorMsg"
                      style={{
                        color: "red"
                      }}
                    >
                     {errors.url && <span>{errors.url.message}</span>}
                    </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ClaimQ;
