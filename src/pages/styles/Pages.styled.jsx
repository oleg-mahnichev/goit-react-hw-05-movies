import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionStyle = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  display: block;
  border: 2px solid black;
  width: 150px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
  color: black;
`;

export const WrapStyle = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const AddListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  text-decoration: underline;
`;
