import React from 'react'
import {GlobalStyle, Wrapper} from './TokensPage.styles'
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Card from "../../components/Card";

const TokensPage = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <section className="intro">
        <div className="wrap">
          <div className="title">
            <Heading type="span" size="big">Groucho Design tokens test</Heading>
          </div>
          <Card container>
            <Card>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim ut. Congue eu consequat ac felis donec et. Suspendisse in est ante in. Sagittis eu volutpat odio facilisis mauris sit. A condimentum vitae sapien pellentesque. Tempor id eu nisl nunc mi. Justo eget magna fermentum iaculis eu. Tempor id eu nisl nunc mi ipsum. Leo vel orci porta non. Lacus viverra vitae congue eu consequat ac felis donec. Sit amet facilisis magna etiam tempor orci eu. Turpis in eu mi bibendum neque. Non tellus orci ac auctor. Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas.
              </p>
            </Card>
            <Card>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim ut. Congue eu consequat ac felis donec et. Suspendisse in est ante in. Sagittis eu volutpat odio facilisis mauris sit. A condimentum vitae sapien pellentesque. Tempor id eu nisl nunc mi. Justo eget magna fermentum iaculis eu. Tempor id eu nisl nunc mi ipsum. Leo vel orci porta non. Lacus viverra vitae congue eu consequat ac felis donec. Sit amet facilisis magna etiam tempor orci eu. Turpis in eu mi bibendum neque. Non tellus orci ac auctor. Sit amet tellus cras adipiscing. Vitae turpis massa sed elementum tempus egestas.
              </p>
            </Card>
          </Card>
          <div className="form">
            <Button>
              Default button
            </Button>
            <Button secondary>
              Second button
            </Button>
          </div>
        </div>
      </section>
    </Wrapper>
  </>
)

export default TokensPage
