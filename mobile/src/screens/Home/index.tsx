import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import cardsCarrousel from '../../assets/cards-carrousel.png';
import iconNotify from '../../assets/icons/notification/notify-icon.png';
import iconEyeBalance from '../../assets/icons/eye/eye-balance.png';

import iconBoleto from '../../assets/icons/boleto/boleto.png';
import iconCharge from '../../assets/icons/charge/charge.png';
import iconDeposit from '../../assets/icons/deposit/deposit.png';
import iconExtract from '../../assets/icons/extract/extract.png';
import iconPix from '../../assets/icons/pix/pix.png';
import iconTransfer from '../../assets/icons/transfer/transfer.png';

import {
  Container,
  Header,
  HeaderContent,
  HeaderCarrousel,
  HeaderBalanceInfo,
  HeaderBalanceText,
  HeaderBalanceDetail,
  Balance,
  EyeButton,
  EyeIcon,
  NotifyButton,
  NotifyIcon,
  Content,
  ContentBody,
  ContentFooter,
  Menu,
  Options,
  OptionContainer,
  Option,
  OptionIcon,
  OptionText,
  Footer,
  Services,
} from './styles';

interface Purchase {
  id: string;
  description: string;
  detail: string;
  value: string;
}

const Home: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const { user, signOut } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    // api.get('orders').then(response => {
    //   setPurchase(response.data);
    // });
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <HeaderCarrousel>
              <Image source={cardsCarrousel} />
            </HeaderCarrousel>

            <NotifyButton
              onPress={() => {
                console.log('Pressed');
              }}
            >
              <NotifyIcon source={iconNotify} />
            </NotifyButton>
          </HeaderContent>

          <HeaderBalanceInfo>
            <HeaderBalanceText>SALDO</HeaderBalanceText>
            <HeaderBalanceDetail>
              <HeaderBalanceText fontSize={11}>R$</HeaderBalanceText>
              <Balance>
                <HeaderBalanceText fontSize={18} isBold>
                  {' '}
                  2.617.14
                </HeaderBalanceText>
              </Balance>

              <EyeButton
                onPress={() => {
                  console.log('Pressed');
                }}
              >
                <EyeIcon source={iconEyeBalance} />
              </EyeButton>
            </HeaderBalanceDetail>
          </HeaderBalanceInfo>
        </Header>

        <Content>
          <ContentBody>
            <Menu>
              <Options>
                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconExtract} />
                  </Option>
                  <OptionText>Extrato</OptionText>
                </OptionContainer>

                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconTransfer} />
                  </Option>
                  <OptionText>Transferir</OptionText>
                </OptionContainer>

                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconPix} />
                  </Option>
                  <OptionText>Pix</OptionText>
                </OptionContainer>

                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconBoleto} />
                  </Option>
                  <OptionText>Boletos</OptionText>
                </OptionContainer>

                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconDeposit} />
                  </Option>
                  <OptionText>Depositar</OptionText>
                </OptionContainer>

                <OptionContainer>
                  <Option>
                    <OptionIcon source={iconCharge} />
                  </Option>
                  <OptionText>Cobrar</OptionText>
                </OptionContainer>
              </Options>
            </Menu>
          </ContentBody>
        </Content>

        <Footer>
          <Services />
        </Footer>
      </Container>
    </>
  );
};

export default Home;
