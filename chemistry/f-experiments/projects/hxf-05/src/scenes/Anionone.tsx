import React from 'react';
import {AutoScene} from '../components/auto';

export const Anionone: React.FC = () => <AutoScene k="anion1" d={{"tag": "考点四", "title": "Cl^- 与 SO4^2- 的检验", "blocks": [{"t": "table", "at": "a11", "head": ["离子", "先加", "再加", "现象"], "cols": "0.8fr 1.2fr 1.2fr 1.1fr", "rows": [{"at": "a11", "cells": ["Cl^-", "{稀硝酸}", "AgNO3", "白色沉淀"]}, {"at": "a12", "cells": ["SO4^2-", "{稀盐酸}（无现象）", "BaCl2", "白色沉淀"]}], "size": 32, "rowHeight": 72}, {"t": "text", "at": "a13", "text": "先加盐酸：排除 {CO3^2-、SO3^2-、Ag^+}", "size": 33, "center": true}], "callout": {"label": "易错", "at": "a14", "text": "SO4^2- {不能用稀硝酸}酸化"}}} />;
