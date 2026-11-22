import React from 'react';
import {AutoScene} from '../components/auto';

export const Ke: React.FC = () => <AutoScene k="ke" d={{"tag": "考点五", "title": "分子动能与温度", "blocks": [{"t": "big", "at": "k2", "text": "温度是分子{平均动能}的标志", "size": 52}, {"t": "text", "at": "k1", "text": "各分子动能不同，只能讨论{平均值|orange}", "size": 34}], "callout": {"label": "易错", "at": "k3", "text": "单个分子{没有温度}"}, "beat": {"k": "hot", "at": "k2b", "text": "温度高\n分子{平均动能大|red}"}}} />;
