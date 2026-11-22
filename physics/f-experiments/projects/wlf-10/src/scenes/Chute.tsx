import React from 'react';
import {AutoScene} from '../components/auto';

export const Chute: React.FC = () => <AutoScene k="chute" d={{"tag": "考点五", "title": "案例 2 的原理", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "入射小球沿斜槽滚下，{碰撞}被碰小球"}, {"at": "h2", "text": "两球都做{平抛运动}"}, {"at": "h3", "text": "下落高度相同 → {时间相同}"}, {"at": "h4", "text": "{水平距离 ∝ 速度}"}], "arrows": []}], "callout": {"label": "要点", "at": "h5", "text": "用{水平距离代替速度}，不必测时间"}}} />;
