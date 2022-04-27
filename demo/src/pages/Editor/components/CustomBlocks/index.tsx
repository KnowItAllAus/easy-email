import { BlockManager } from 'easy-email-core';
import {
  BlockAttributeConfigurationManager,
  BlockMarketManager
} from 'easy-email-extensions';
import { CustomBlocksType } from './constants';
import {
  Panel as ProductRecommendationPanel,
  ProductRecommendation
} from './ProductRecommendation';
import { Example as ProductRecommendationExample } from './ProductRecommendation/Example';
import {
  Example as UnsubscribeExample, Panel as UnsubscribePanel, Unsubscribe
} from './Unsubscribe';

BlockManager.registerBlocks({
  ProductRecommendation: ProductRecommendation,
  Unsubscribe: Unsubscribe,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
  [CustomBlocksType.UNSUBSCRIBE]: UnsubscribePanel,
});

BlockMarketManager.addCategories([
  {
    title: 'Custom',
    name: 'Custom',
    blocks: [
      {
        type: CustomBlocksType.PRODUCT_RECOMMENDATION,
        title: ProductRecommendation.name,
        description: 'A custom block',
        component: ProductRecommendationExample,
        thumbnail:
          'https://assets.maocanhua.cn/c160738b-db01-4081-89e5-e35bd3a34470-image.png',
      },
      {
        type: CustomBlocksType.UNSUBSCRIBE,
        title:Unsubscribe.name,
        description: 'Unsubcribe to mailing list',
        component: UnsubscribeExample,
      },
    ],
  },
]);
