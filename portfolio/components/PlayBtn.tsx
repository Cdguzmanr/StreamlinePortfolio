import React from 'react';
import styled from 'styled-components';
import { IoLogoGameControllerB } from "react-icons/io";

interface PlayBtnProps {
  gameLink: string;
}

const PlayBtn: React.FC<PlayBtnProps> = ({ gameLink }) => {
  const handleClick = () => {
    window.open(gameLink, '_blank'); // Opens link in a new tab
  };

  return (
    <StyledWrapper>
      <button onClick={handleClick}>
        <span className="shadow" />
        <span className="edge" />
        <span className="front text"> 
            <span className='flex gap-2'>

                <IoLogoGameControllerB className='size-5'/> 
                Play Now
            </span>
        </span>
      </button >
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   position: relative;
   border: none;
   background: transparent;
   padding: 0;
   cursor: pointer;
   outline-offset: 4px;
   transition: filter 250ms;
   user-select: none;
   touch-action: manipulation;
  }

  .shadow {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-radius: 12px;
   background: hsl(0deg 0% 0% / 0.25);
   will-change: transform;
   transform: translateY(2px);
   transition: transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .edge {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-radius: 12px;
   background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }

  .front {
   display: block;
   position: relative;
   padding: 12px 27px;
   border-radius: 12px;
   font-size: 0.75rem;
   font-weight: 700;
   color: white;
   background: hsl(345deg 100% 47%);
   will-change: transform;
   transform: translateY(-4px);
   transition: transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  button:hover {
   filter: brightness(110%);
  }

  button:hover .front {
   transform: translateY(-6px);
   transition: transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  button:active .front {
   transform: translateY(-2px);
   transition: transform 34ms;
  }

  button:hover .shadow {
   transform: translateY(4px);
   transition: transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  button:active .shadow {
   transform: translateY(1px);
   transition: transform 34ms;
  }

  button:focus:not(:focus-visible) {
   outline: none;
  }`;

export default PlayBtn;
