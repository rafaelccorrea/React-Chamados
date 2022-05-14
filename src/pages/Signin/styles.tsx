import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Text = styled.h1`
  font-weight: bold;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140vh;
  height: 72vh;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const BoxGrid = {
  backgroundImage: "url(https://source.unsplash.com/random)",
  backgroundRepeat: "no-repeat",
  backgroundColor: (t: any) =>
    t.palette.mode === "light"
      ? t.palette.grey[50]
      : t.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}

export const BoxContainer = {
  my: 8,
  mx: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}