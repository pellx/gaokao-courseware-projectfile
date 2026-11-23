import React from 'react';
import {AutoScene} from '../components/auto';

export const Total: React.FC = () => <AutoScene k="total" d={{"tag": "考点二", "title": "全反射现象", "blocks": [{"t": "chain", "steps": [{"at": "b1", "text": "光密 → 光疏"}, {"at": "b2", "text": "入射角增大"}, {"at": "b2", "text": "折射光变弱 反射光变强", "c": "orange"}, {"at": "b3", "text": "折射光消失", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "b4", "text": "能量{全部反射}"}, "beat": {"k": "box", "at": "b3b", "text": "折射光消失\n光{全部反射|red}回来"}}} />;
