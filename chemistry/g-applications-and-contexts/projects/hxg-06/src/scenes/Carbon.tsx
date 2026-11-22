import React from 'react';
import {AutoScene} from '../components/auto';

export const Carbon: React.FC = () => <AutoScene k="carbon" d={{"tag": "考点五", "title": "CO2 资源化与碳中和", "blocks": [{"t": "big", "at": "ca1", "text": "碳中和：排放 = {吸收}，净排放为零", "size": 42}, {"t": "big", "at": "ca2", "text": "CO2 + 3H2 ⇌ {CH3OH} + H2O", "size": 40, "c": "orange", "soft": "orangeSoft"}, {"t": "text", "at": "ca3", "text": "减排：新能源、提高能效、{捕集封存}", "size": 33, "center": true}], "callout": {"label": "考法", "at": "ca4", "text": "情境题考{盖斯定律、平衡、选择性}"}}} />;
