import { BigNumberish } from 'ethers';
import { e18, ZERO_ADDRESS } from './web3-utils';

export interface v2FtmStrategy {
  name: string;
  added: boolean;
  address: string;
  costToken?: string;
  costPair?: string;
}

export const v2FtmHarvestStrategies: v2FtmStrategy[] = [
  {
    name: 'WFTM',
    added: true,
    address: '0x695a4a6e5888934828cb97a3a7adbfc71a70922d',
  },
  {
    name: 'MIM',
    added: true,
    address: '0xd0d1f041f93c0ff1091457618e529610c67a76de',
  },
  {
    name: 'USDC',
    added: true,
    address: '0x27a5ce447f4E581aE69061E90521da4B5b298818',
  },
  {
    name: 'DAI',
    added: true,
    address: '0xd025b85db175EF1b175Af223BD37f330dB277786',
  },
  {
    name: 'YFI',
    added: true,
    address: '0xDf262B43bea0ACd0dD5832cf2422e0c9b2C539dc',
  },
  {
    name: 'Curve Tricrypto',
    added: true,
    address: '0xcF3b91D83cD5FE15269E6461098fDa7d69138570',
  },
  {
    name: 'Curve Geist',
    added: true,
    address: '0x7ff6fe5bDa1b26fa46880dF8AF844326DAd50d13',
  },
  {
    name: 'FRAX GenLender',
    added: true,
    address: '0xfF8bb7261E4D51678cB403092Ae219bbEC52aa51',
  },
  {
    name: 'USDT GenLender',
    added: true,
    address: '0x83a5Af7540E919dE74cf2D6d5F40e47f11D3E8d1',
  },
  {
    name: 'ssb_dai',
    added: true,
    address: '0xE6b7D27157673aD2ae21AFD23CC35DA766105431',
  },
  {
    name: 'ssb_usdc',
    added: true,
    address: '0xfa9A5C7C27030602F1C03f7377553D1e694e1615',
  },
  {
    name: 'ssb_mim',
    added: true,
    address: '0xbBdc83357287a29Aae30cCa520D4ed6C750a2a11',
  },
];

export const v2FtmTendStrategies: v2FtmStrategy[] = [];
