import React from 'react';
import {AutoScene} from '../components/auto';

export const Change: React.FC = () => <AutoScene k="change" d={{"tag": "考点三", "title": "做功与电势能变化", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "W > 0：E_p {减少}", "size": 44}]}, {"blocks": [{"t": "big", "at": "c2", "text": "W < 0：E_p {增加|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "c3", "text": "只看{静电力}做功的正负"}}} />;
