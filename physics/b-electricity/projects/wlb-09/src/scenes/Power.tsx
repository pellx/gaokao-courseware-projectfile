import React from 'react';
import {AutoScene} from '../components/auto';

export const Power: React.FC = () => <AutoScene k="power" d={{"tag": "考点二", "title": "电功率", "blocks": [{"t": "big", "at": "b2", "text": "P = W/t = {UI}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电功率", "at": "b3", "text": "做功的{快慢}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "电功", "at": "b3", "text": "做功的{多少|orange}", "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "b4", "text": "功率大≠电功多，还要看{通电时间}"}}} />;
