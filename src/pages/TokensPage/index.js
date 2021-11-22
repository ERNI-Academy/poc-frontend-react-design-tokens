import React from 'react'
import {GlobalStyle, Wrapper} from './TokensPage.styles'
import Heading from "../../components/Heading";
import Button from "../../components/Button";

const TokensPage = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <section className="intro">
        <div className="wrap">
          <div className="title">
            <Heading type="span">Tokens API</Heading>
          </div>
          <div>
            <p>
              Tokens explanation
            </p>
          </div>
          <div className="form">
            <Button>
              Button
            </Button>
          </div>
          <div className="form">
            <Button secondary>
              Button
            </Button>
          </div>
        </div>
      </section>
    </Wrapper>
  </>
)

export default TokensPage
