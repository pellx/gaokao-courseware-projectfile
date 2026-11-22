import React from 'react';
import {AutoScene} from '../components/auto';

export const Salt: React.FC = () => <AutoScene k="salt" d={{"tag": "考点五", "title": "盐的分类", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正盐", "at": "sa1", "text": "H 完全被中和：Na2SO4、Na2CO3", "c": "red"}]}, {"blocks": [{"t": "rule", "tag": "酸式盐", "at": "sa2", "text": "H 部分被中和：NaHCO3、NaHSO4", "c": "orange"}]}]}, {"t": "rule", "tag": "碱式盐", "at": "sa3", "text": "OH^- 部分被中和：Cu2(OH)2CO3（铜绿）", "c": "green"}, {"t": "big", "at": "sa4", "text": "{H3PO2} 是一元酸 → {NaH2PO2} 是{正盐}〔课外〕", "size": 38}], "callout": {"label": "易错", "at": "sa5", "text": "先确定对应的酸是{几元酸}，再判断正盐还是酸式盐"}}} />;
