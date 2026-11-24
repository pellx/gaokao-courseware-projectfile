import React from 'react';
import {AutoScene} from '../components/auto';

export const Note: React.FC = () => <AutoScene k="note" d={{"tag": "考点五", "title": "注意事项", "blocks": [{"t": "items", "items": [{"at": "n1", "text": "大头针{竖直}插，同侧两针间距{适当大些}"}, {"at": "n2", "text": "入射角{不宜太小也不宜太大}"}, {"at": "n3", "text": "不摸光学面，{不把玻璃砖当尺子}"}, {"at": "n4", "text": "玻璃砖与白纸{相对位置不变}；选{宽}的玻璃砖"}], "size": 34}], "callout": {"label": "易错", "at": "n5", "text": "不当尺子用，画完界线{不能移动}"}, "beat": {"k": "point", "at": "n3b", "text": "光学面\n{别用手摸|red}"}}} />;
