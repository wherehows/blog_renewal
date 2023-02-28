import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface ContentProps {
  documents?: MarkdownDocument[];
  selectedDocument?: string | null;
}

const Content = ({ documents, selectedDocument }: ContentProps) => {
  if (typeof document === 'undefined') return <></>;

  return (
    <Wrapper>
      {selectedDocument ? (
        <MarkdownRenderer
          dangerouslySetInnerHTML={{ __html: selectedDocument }}
        />
      ) : (
        <DocumentList>
          {documents?.map(({ html, title, date, slug }: any) => (
            <DocumentItem key={slug}>
              <Button to={slug}>
                <Title>{title}</Title>
                <PostDate>{formatDate(date)}</PostDate>
                <Description>{changeMarkdownToTextContent(html)}</Description>
              </Button>
            </DocumentItem>
          ))}
        </DocumentList>
      )}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled('div')(() => ({
  diplay: 'flex',
  marginLeft: 'calc((100% - 70rem) /2 + 21rem)',
  width: '46rem',
  height: '100%',
}));

const DocumentItem = styled('li')(() => ({
  listStyleType: 'none',
  marginBottom: '2rem',
}));

const MarkdownRenderer = styled('div')(() => ({
  width: '100%',
  fontSize: '1.2rem',
  a: {
    color: '#3347ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  'a:visited': {
    color: '#3347ff',
    fontWieght: 'bold',
  },
}));

const Button = styled(Link)(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  padding: 0,
  cursor: 'pointer',
  color: 'black',
  textDecoration: 'none',
  outline: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: 'black',
  },
  '&:active': {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Title = styled('div')(() => ({
  textAlign: 'left',
  width: '100%',
  fontSize: '1.4rem',
  color: '#946225',
}));

const PostDate = styled('div')(() => ({
  fontSize: '0.9rem',
  textAlign: 'left',
  width: '100%',
  marginBottom: '0.4rem',
}));

const Description = styled('div')(() => ({
  display: 'inline-block',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
  lineHeight: 1.2,
  height: '3.6rem',
  textAlign: 'left',
  wordWrap: 'break-word',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
}));

const DocumentList = styled('ul')(() => ({
  padding: 0,
  marginTop: '1rem',
}));

const changeMarkdownToTextContent = (s: any) => {
  const dummyTag = document.createElement('span');
  dummyTag.innerHTML = s;
  return dummyTag.textContent || dummyTag.innerText;
};

const formatDate = (s: any) => {
  const sArray = s.split('-');
  return `${sArray[0].slice(2, 4)}년 ${sArray[1]}월 ${sArray[2]}일`;
};
