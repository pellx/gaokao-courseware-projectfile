import React from 'react';
import {AutoScene} from '../components/auto';

export const Multi: React.FC = () => <AutoScene k="multi" d={{"tag": "考点六", "title": "多力平衡与系统平衡", "blocks": [{"t": "rule", "tag": "多力平衡", "at": "f1", "text": "任一力与其余各力的合力{等大、反向}", "c": "red"}, {"t": "rule", "tag": "系统平衡", "at": "f2", "text": "系统所受{外力的合力}为 0", "c": "orange"}, {"t": "text", "at": "f3", "text": "内力成对出现，不影响系统平衡条件", "size": 30}], "callout": {"label": "要点", "at": "f4", "text": "系统平衡只看{外力}"}}} />;
