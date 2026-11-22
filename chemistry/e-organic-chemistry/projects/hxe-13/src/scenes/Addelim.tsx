import React from 'react';
import {AutoScene} from '../components/auto';

export const Addelim: React.FC = () => <AutoScene k="addelim" d={{"tag": "考点二", "title": "加成反应与消去反应", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "加成", "at": "ae1", "text": "{只上不下}：C=C、C≡C、苯环、醛酮的 C=O", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "消去", "at": "ae3", "text": "{只下不上}：生成不饱和键", "c": "orange", "size": 31}]}]}, {"t": "text", "at": "ae2", "text": "羧基、酯基中的 C=O {一般不与 H2 加成}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ae4", "text": "分子{内}脱水：消去；分子{间}脱水：取代"}, "beat": {"k": "friends", "at": "ae3b", "text": "加成：{拉进来|red}\n消去：{推出去|red}"}}} />;
