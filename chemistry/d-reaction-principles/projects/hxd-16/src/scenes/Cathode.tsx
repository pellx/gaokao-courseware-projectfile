import React from 'react';
import {AutoScene} from '../components/auto';

export const Cathode: React.FC = () => <AutoScene k="cathode" d={{"tag": "考点四", "title": "阴极放电顺序", "blocks": [{"t": "big", "at": "ca2", "text": "Ag^+ > Fe^3+ > Cu^2+ > {H^+}(酸) > Pb^2+ > Fe^2+ > Zn^2+ > H^+(水)", "size": 34}, {"t": "rule", "tag": "不放电", "at": "ca3", "text": "水溶液中 Al^3+、Mg^2+、Na^+、K^+：{H2O 中的 H^+ 放电}", "c": "orange", "size": 31}, {"t": "text", "at": "ca3", "text": "2H2O + 2e^- = H2↑ + {2OH^-}", "size": 34, "center": true}], "callout": {"label": "易错", "at": "ca4", "text": "Fe^3+ 先变 {Fe^2+}；活泼金属要电解{熔融}化合物"}}} />;
