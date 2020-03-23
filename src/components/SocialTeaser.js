import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ExternalLink from './ExternalLink';
import { css } from '@emotion/core';
import { colors } from '../utils/theme';
import StyledBox from 'components/StyledBox';

const SocialTeaser = ({ color, parent = 'SocialTeaser' }) => {
  const data = useStaticQuery(graphql`
    query SocialTeaserQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
            github
            googlemaps
            youtube
          }
        }
      }
    }
  `);

  return (
    <StyledBox direction="row" className="align-c">
      <StyledBox pad="small">
        <ExternalLink
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s;
            :hover {
              transform: scale(1.2);
              svg,
              path {
                fill: ${color ? color : colors['green-5']};
              }
            }
          `}
          data-typecat="Icon"
          data-typeaction="Click"
          data-typename={`${parent} Twitter`}
          target="_blank"
          href={data.site.siteMetadata.social.twitter}
        >
          <svg
            css={css`
              display: inline-block;
              -webkit-flex: 0 0 auto;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              width: 24px;
              height: 24px;
              fill: #555;
              stroke: #555;
            `}
            aria-label="Twitter"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
            />
          </svg>
        </ExternalLink>
      </StyledBox>
      <StyledBox pad="small">
        <ExternalLink
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s;
            :hover {
              transform: scale(1.2);
              svg,
              path {
                fill: ${color ? color : colors['green-5']};
              }
            }
          `}
          data-typecat="Icon"
          data-typeaction="Click"
          data-typename={`${parent} Github`}
          href={data.site.siteMetadata.social.github}
          target="_blank"
        >
          <svg
            css={css`
              display: inline-block;
              -webkit-flex: 0 0 auto;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              width: 24px;
              height: 24px;
              fill: #555;
              stroke: #555;
            `}
            aria-label="Github"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"
            />
          </svg>
        </ExternalLink>
      </StyledBox>
      <StyledBox pad="small">
        <ExternalLink
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s;
            :hover {
              transform: scale(1.2);
              svg,
              path {
                fill: ${color ? color : colors['green-5']};
              }
            }
          `}
          data-typecat="Icon"
          data-typeaction="Click"
          data-typename={`${parent} Linkedin`}
          target="_blank"
          href={data.site.siteMetadata.social.linkedin}
        >
          <svg
            css={css`
              display: inline-block;
              -webkit-flex: 0 0 auto;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              width: 24px;
              height: 24px;
              fill: #555;
              stroke: #555;
            `}
            aria-label="Linkedin"
            viewBox="0 0 24 24"
          >
            <path d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z" />
          </svg>
        </ExternalLink>
      </StyledBox>
    </StyledBox>
  );
};
export default SocialTeaser;
