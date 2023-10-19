import { useState } from "react";
import styled from "styled-components";
import { devices } from "../../../public/constants";

const ControlBtn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 80px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  z-index: 1;
  transition: all 0.5s;

  @media only screen and (${devices.sp}) {
    width: 35px;
    height: 35px;
    right: 20px;
    bottom: 30px;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 50%;
    border-radius: 100vw;
    background-color: #fff;
    transition: transform 0.5s ease-in;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  &.opened {
    transform: translateY(100vh);
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const CloseBtn = styled.div`
  position: absolute;
  right: 20px;
  bottom: 100px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  z-index: 1;
  transition: all 0.3s;

  @media only screen and (${devices.sp}) {
    width: 35px;
    height: 35px;
    right: 10px;
    bottom: 70px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 50%;
    border-radius: 100vw;
    background-color: #fff;
    transition: transform 0.5s ease-in;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &.opened {
    &:after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
    &:before {
      opacity: 0;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const ControlBody = styled.div`
  padding: 15px 100px 15px 50px;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 100%);
  transition: all 0.3s ease-in;
  background: #fff;
  opacity: 0.7;

  &.opened {
    transform: translate(-50%, 0);
  }

  @media only screen and (${devices.sp}) {
    padding: 1rem 5rem 1.5rem 5rem;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 20px;

    @media only screen and (${devices.sp}) {
      flex-direction: column;
      gap: 8px;
    }

    li {
      padding: 10px;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #cccccc;
      border-radius: 10px;

      @media only screen and (${devices.sp}) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
      }

      &.scene__controls {
        justify-content: center;
        @media only screen and (${devices.sp}) {
          flex-direction: row;
        }
      }
    }
    h2 {
      font-size: 16px;
      margin-bottom: 20px;
      color: #000;
      @media only screen and (${devices.sp}) {
        margin-bottom: 0;
        width: 50px;
      }
    }

    .choices {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 8px;

      & > span {
        position: relative;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        text-align: center;
        border: 1px solid #cccccc;

        &:hover {
          cursor: pointer;
        }

        @media only screen and (${devices.sp}) {
          width: 1rem;
          height: 1rem;
        }

        &#selected::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 1px;
          background-color: #000;
        }
      }

      &--wall {
        span:first-child {
          background: #444348;
        }
        span:nth-child(2) {
          background: #cdc2ae;
        }
        span:last-child {
          background: #ffffff;
        }
      }

      &--floor {
        span:first-child {
          background: #c38154;
        }
        span:nth-child(2) {
          background: #cdc2ae;
        }
        span:last-child {
          background: #f0edd4;
        }
      }

      &--sofa {
        grid-template-columns: repeat(4, 1fr);
        span:first-child {
          background: #7f8487;
        }
        span:nth-child(2) {
          background: #b6a798;
        }
        span:nth-child(3) {
          background: #bfbab9;
        }
        span:nth-child(4) {
          background: #000;
        }
        span:nth-child(5) {
          background: #927e6e;
        }
        span:nth-child(6) {
          background: #fff;
        }
      }

      &--others {
        grid-template-columns: 1fr;
        width: 100%;

        & > span {
          width: 100%;
          border-radius: 100vw;
          padding: 9px 9px 12px 9px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
        }

        .hiddenBtn--human {
          background-color: #eadbc8;
        }

        .screen_shot_icon {
          position: relative;
          display: flex;
          align-items: center;

          &--inner {
            padding-top: 4px;
            display: flex;
            align-items: center;
            line-height: 1.4;
            &::before {
              content: "";
              margin-right: 4px;
              width: 16px;
              height: 16px;
              background-image: url(./logo/camera.svg);
              background-size: contain;
              background-position: 50% 50%;
            }
          }
        }
      }
    }
  }
`;

const ColorInfo = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 15px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 100vw;
  opacity: 0.7;

  @media only screen and (${devices.sp}) {
    top: 50px;
    font-size: 12px;
  }
`;

const AlertText = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 5px 15px;
  font-size: 13px;
  background-color: #000;
  color: #fff;
  opacity: 0.7;
  text-align: center;
  @media only screen and (${devices.sp}) {
    width: 102%;
    font-size: 11px;
  }
`;

export default function Controls(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ColorInfo>
        <h3>
          {props.normalColor === "01"
            ? "EPUブラック X グレー"
            : props.normalColor === "02"
            ? "EPUグレージュ X グレー"
            : props.normalColor === "03"
            ? "EPUホワイト X グレー"
            : props.normalColor === "04"
            ? "EPUブラック"
            : props.normalColor === "05"
            ? "EPUグレージュ"
            : props.normalColor === "06"
            ? "EPUホワイト"
            : ""}
        </h3>
      </ColorInfo>
      <AlertText>
        3Dイメージは実際の商品と色・仕様が異なる場合がございます。
      </AlertText>
      <ControlBtn
        className={isOpen ? "opened" : ""}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <ControlBody className={isOpen ? "opened" : ""}>
        <ul>
          {props.scenes === "room" && (
            <>
              <li>
                <h2>wall</h2>
                <div className="choices choices--wall">
                  <span
                    id={props.wallTexture === "01" ? "selected" : ""}
                    onClick={() => {
                      props.setWallTexture("01");
                    }}
                  ></span>
                  <span
                    id={props.wallTexture === "02" ? "selected" : ""}
                    onClick={() => {
                      props.setWallTexture("02");
                    }}
                  ></span>
                  <span
                    id={props.wallTexture === "03" ? "selected" : ""}
                    onClick={() => {
                      props.setWallTexture("03");
                    }}
                  ></span>
                </div>
              </li>
              <li>
                <h2>floor</h2>
                <div className="choices choices--floor">
                  <span
                    id={props.floorTexture === "01" ? "selected" : ""}
                    onClick={() => {
                      props.setFloorTexture("01");
                    }}
                  ></span>
                  <span
                    id={props.floorTexture === "02" ? "selected" : ""}
                    onClick={() => {
                      props.setFloorTexture("02");
                    }}
                  ></span>
                  <span
                    id={props.floorTexture === "03" ? "selected" : ""}
                    onClick={() => {
                      props.setFloorTexture("03");
                    }}
                  ></span>
                </div>
              </li>
            </>
          )}
          <li>
            <h2>sofa</h2>
            <div className="choices choices--sofa">
              <span
                id={props.normalColor === "01" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("01");
                }}
              ></span>
              <span
                id={props.normalColor === "02" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("02");
                }}
              ></span>
              <span
                id={props.normalColor === "03" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("03");
                }}
              ></span>
              <span
                id={props.normalColor === "04" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("04");
                }}
              ></span>
              <span
                id={props.normalColor === "05" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("05");
                }}
              ></span>
              <span
                id={props.normalColor === "06" ? "selected" : ""}
                onClick={() => {
                  props.setNormalColor("06");
                }}
              ></span>
            </div>
          </li>
          <li className="scene__controls">
            <div className="choices choices--others">
              <span
                onClick={() => {
                  if (props.scenes === "sofa") {
                    props.setScenes("room");
                    props.setLerping(true);
                  } else {
                    props.setScenes("sofa");
                    props.setLerping(true);
                  }
                }}
              >
                {props.scenes === "room" ? "sofa >" : "room >"}
              </span>
              <span
                className={
                  props.human ? "hiddenBtn hiddenBtn--human" : "hiddenBtn"
                }
                onClick={() => {
                  props.setHuman(!props.human);
                }}
              >
                model
              </span>
              <span
                className="screen_shot_icon"
                onClick={() => {
                  props.setIsShot(true);
                }}
              >
                <span className="screen_shot_icon--inner">save</span>
              </span>
            </div>
          </li>
        </ul>
        <CloseBtn
          className={!isOpen ? "opened" : ""}
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </ControlBody>
    </>
  );
}
