import styled from "styled-components";


const Container = styled.div`
height: 30px;
background-color: purple;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Shoperpoint Your best online store with discounted prices
    </Container>
  );
}

export default Announcement;
