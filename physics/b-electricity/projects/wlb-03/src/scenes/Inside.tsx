import React from 'react';
import {AutoScene} from '../components/auto';

export const Inside: React.FC = () => <AutoScene k="inside" d={{"tag": "考点二", "title": "导体内部电场强度为 0", "blocks": [{"t": "big", "at": "n1", "text": "E_内 = {0}", "size": 60}, {"t": "big", "at": "n2", "text": "E_外 + E_感 = {0}", "size": 44, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "n4", "text": "内部 E 处处为 0"}}} />;
