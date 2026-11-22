import React from 'react';
import {AutoScene} from '../components/auto';

export const Anode: React.FC = () => <AutoScene k="anode" d={{"tag": "考点三", "title": "阳极放电顺序", "blocks": [{"t": "rule", "tag": "活性电极", "at": "an1", "text": "{电极本身先失电子}（Au、Pt 除外）", "c": "red", "size": 32}, {"t": "big", "at": "an2", "text": "S^2- > I^- > Br^- > Cl^- > {OH^-} > 含氧酸根", "size": 40}, {"t": "text", "at": "an3", "text": "含氧酸根不放电时：2H2O − 4e^- = {O2↑} + 4H^+", "size": 32, "center": true}], "callout": {"label": "易错", "at": "an4", "text": "Cu 作阳极：{Cu 本身失电子}"}, "beat": {"k": "point", "at": "an3b", "text": "先看电极{活不活泼|red}\n再排阴离子"}}} />;
