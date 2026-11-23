import React from 'react';
import {AutoScene} from '../components/auto';

export const Derive: React.FC = () => <AutoScene k="derive" d={{"tag": "考点四", "title": "定律的推导", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d1", "text": "W_G = {E_k2 − E_k1}", "size": 38}]}, {"blocks": [{"t": "big", "at": "d2", "text": "W_G = {E_p1 − E_p2|orange}", "size": 38, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "d3", "text": "E_k1 + E_p1 = {E_k2 + E_p2}", "size": 52}], "callout": {"label": "要点", "at": "d4", "text": "由{动能定理}推出"}}} />;
