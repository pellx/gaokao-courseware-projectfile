import React from 'react';
import {AutoScene} from '../components/auto';

export const Ldr: React.FC = () => <AutoScene k="ldr" d={{"tag": "考点五", "title": "光敏电阻", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "光照强", "at": "l2", "lines": ["电阻{小}"], "c": "red", "size": 40}]}, {"blocks": [{"t": "panel", "title": "光照弱", "at": "l2", "lines": ["电阻{大}"], "c": "orange", "size": 40}]}]}, {"t": "big", "at": "l3", "text": "光照强弱 → {电阻大小}", "size": 52}], "callout": {"label": "易错", "at": "l4", "text": "天变暗，阻值{增大}"}}} />;
