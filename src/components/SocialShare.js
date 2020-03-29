import React from 'react';
import { css } from '@emotion/core';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import StyledBox from 'components/StyledBox';

const SocialShare = (props) => {
  let location;
  if (typeof window !== 'undefined') {
    location = window.location;
  } else {
    location = '';
  }
  return (
    <StyledBox
      {...props}
      css={css`
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      `}
    >
      <h6 style={{ margin: '20px', marginBottom: '30px' }}>Teilen</h6>
      <ul
        css={css`
          margin-left: 0;
          li {
            display: inline-block;
            cursor: pointer;
          }
          li:not(:first-of-type) {
            margin-left: 40px;
          }
        `}
      >
        <li>
          <FacebookShareButton
            url={location}
            data-typecat="Link"
            data-typeaction="Click"
            data-typename="Share Facebook"
          >
            <svg
              css={css`
                display: inline-block;
                -webkit-flex: 0 0 auto;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                width: 24px;
                height: 24px;
              `}
              aria-label="Facebook"
              viewBox="0 0 24 24"
              data-typecat="Link"
              data-typeaction="Click"
              data-typename="Share Facebook"
            >
              <path
                fill="#3B5998"
                fillRule="evenodd"
                d="M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0"
              />
            </svg>
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton
            url={location}
            data-typecat="Link"
            data-typeaction="Click"
            data-typename="Share Linkedin"
          >
            <svg
              css={css`
                display: inline-block;
                -webkit-flex: 0 0 auto;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                width: 24px;
                height: 24px;
              `}
              aria-label="Linkedin"
              viewBox="0 0 24 24"
              data-typecat="Link"
              data-typeaction="Click"
              data-typename="Share Linkedin"
            >
              <path
                fill="#0077B5"
                fillRule="evenodd"
                d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
              />
            </svg>
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton
            url={location}
            data-typecat="Link"
            data-typeaction="Click"
            data-typename="Share Twitter"
          >
            <svg
              css={css`
                display: inline-block;
                -webkit-flex: 0 0 auto;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                width: 24px;
                height: 24px;
              `}
              aria-label="Twitter"
              viewBox="0 0 24 24"
              data-typecat="Link"
              data-typeaction="Click"
              data-typename="Share Twitter"
            >
              <path
                fill="#1DA1F2"
                fillRule="evenodd"
                d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
              />
            </svg>
          </TwitterShareButton>
        </li>
        <li>
          <EmailShareButton
            url={location}
            data-typecat="Link"
            data-typeaction="Click"
            data-typename="Share E-Mail"
          >
            <svg
              css={css`
                display: inline-block;
                -webkit-flex: 0 0 auto;
                -ms-flex: 0 0 auto;
                flex: 0 0 auto;
                width: 24px;
                height: 24px;
              `}
              aria-label="Mail"
              viewBox="0 0 24 24"
              data-typecat="Link"
              data-typeaction="Click"
              data-typename="Share E-Mail"
            >
              <path
                fill="#01A982"
                fillRule="evenodd"
                d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
              />
            </svg>
          </EmailShareButton>
        </li>
      </ul>
    </StyledBox>
  );
};
export default SocialShare;
