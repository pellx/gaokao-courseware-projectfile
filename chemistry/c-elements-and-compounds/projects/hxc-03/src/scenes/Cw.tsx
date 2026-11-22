import React from 'react';
import {AutoScene} from '../components/auto';

export const Cw: React.FC = () => <AutoScene k="cw" d={{"tag": "考点四", "title": "氯水的性质", "blocks": [{"t": "table", "at": "cw2", "head": ["起作用的成分", "性质", "实验现象"], "cols": "1fr 1.2fr 2.2fr", "rows": [{"at": "cw2", "cells": ["{H^+}", "酸性", "与 Na2CO3 放出 CO2；石蕊变红"]}, {"at": "cw3", "cells": ["{HClO|orange}", "漂白性", "石蕊变红后{褪色|orange}"]}, {"at": "cw4", "cells": ["{Cl2|green}", "强氧化性", "Fe^2+ → Fe^3+；I^- → I2"]}, {"at": "cw4", "cells": ["Cl^-", "沉淀反应", "加 AgNO3 生成白色沉淀"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "易错", "at": "cw5", "text": "久置氯水 = {稀盐酸}：褪色、酸性增强、不再漂白"}}} />;
