import React from 'react';
import {AutoScene} from '../components/auto';

export const Order: React.FC = () => <AutoScene k="order" d={{"tag": "考点四", "title": "除杂顺序", "blocks": [{"t": "big", "at": "od1", "text": "先{除杂质气体}，后{干燥}", "size": 46}, {"t": "table", "at": "od3", "head": ["气体（杂质）", "除杂试剂"], "cols": "1.4fr 1.8fr", "rows": [{"at": "od3", "cells": ["Cl2（HCl）", "{饱和食盐水}"]}, {"at": "od3", "cells": ["CO2（HCl）", "{饱和 NaHCO3 溶液}"]}, {"at": "od3", "cells": ["SO2（HCl）", "饱和 NaHSO3 溶液"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "od4", "text": "用对应的{饱和酸式盐溶液}"}}} />;
