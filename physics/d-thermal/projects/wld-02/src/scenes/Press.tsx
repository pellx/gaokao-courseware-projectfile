import React from 'react';
import {AutoScene} from '../components/auto';

export const Press: React.FC = () => <AutoScene k="press" d={{"tag": "考点四", "title": "气体压强的微观解释", "blocks": [{"t": "rule", "tag": "来源", "at": "p1", "text": "大量分子频繁{碰撞器壁}，产生持续均匀的压力", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "p3", "text": "分子{平均动能}", "size": 40}]}, {"blocks": [{"t": "big", "at": "p3", "text": "分子{数密度|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "p4", "text": "压强来自{分子碰撞}，不是气体重力"}}} />;
