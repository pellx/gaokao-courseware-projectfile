import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "误差来源", "blocks": [{"t": "rule", "tag": "来源", "at": "e1", "text": "光线定不准、{界线画不准}、角度测不准", "c": "red"}, {"t": "table", "at": "e2", "head": ["界线间距", "折射角 θ_2", "折射率 n"], "cols": "1.4fr 1fr 1fr", "rows": [{"at": "e2", "cells": ["画大了", "偏大", "{偏小}"]}, {"at": "e3", "cells": ["画小了", "偏小", "{偏大}"]}], "size": 32, "rowHeight": 72}], "callout": {"label": "要点", "at": "e4", "text": "针距大些，{多测几组}"}}} />;
