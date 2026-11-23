import React from 'react';
import {AutoScene} from '../components/auto';

export const Density: React.FC = () => <AutoScene k="density" d={{"tag": "考点六", "title": "天体的密度", "blocks": [{"t": "big", "at": "f2", "text": "ρ = {M/(4πR^3/3)}", "size": 56}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "R", "at": "f3", "text": "天体{自身半径}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "r", "at": "f3", "text": "{轨道半径}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "f4", "text": "近地卫星才有 {r ≈ R}"}}} />;
