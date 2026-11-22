import React from 'react';
import {AutoScene} from '../components/auto';

export const Kinds: React.FC = () => <AutoScene k="kinds" d={{"tag": "考点一", "title": "两种电荷", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正电荷", "at": "k2", "text": "丝绸摩擦过的{玻璃棒}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负电荷", "at": "k2", "text": "毛皮摩擦过的{橡胶棒|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "k3", "text": "同种电荷{相互排斥}，异种电荷{相互吸引|orange}", "size": 40}, {"t": "text", "at": "k4", "text": "电荷量单位：{库仑（C）}", "size": 32}], "callout": {"label": "要点", "at": "k5", "text": "只有{正、负}两种电荷；同斥异吸"}}} />;
