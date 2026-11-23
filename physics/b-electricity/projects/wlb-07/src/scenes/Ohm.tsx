import React from 'react';
import {AutoScene} from '../components/auto';

export const Ohm: React.FC = () => <AutoScene k="ohm" d={{"tag": "考点五", "title": "电阻与欧姆定律", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "o1", "text": "R = {U/I}", "size": 52}]}, {"blocks": [{"t": "big", "at": "o2", "text": "I = {U/R|orange}", "size": 52, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "o3", "text": "欧姆定律适用：{金属}、{电解质溶液}导电", "size": 32}], "callout": {"label": "易错", "at": "o4", "text": "R 由导体本身决定，{与 U、I 无关}"}}} />;
