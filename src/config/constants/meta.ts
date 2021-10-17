import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MAD Token',
  description:
    'MAD Token',
  image: 'https://MADex.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MADex')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MADex')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MADex')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MAD Token')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MADex')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MADex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MADex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MADex')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MADex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MADex')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MADex')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MADex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MADex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MADex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MADex')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MADex')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MADex')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MADex')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MADex Info & Analytics')}`,
        description: 'View statistics for MADex exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MADex Info & Analytics')}`,
        description: 'View statistics for MADex exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MADex Info & Analytics')}`,
        description: 'View statistics for MADex exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('MADex')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('MADex')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('MADex')}`,
      }
    default:
      return null
  }
}
