import React from 'react';
import {AutoScene} from '../components/auto';

export const Loss: React.FC = () => <AutoScene k="loss" d={{"tag": "考点六", "title": "产品损失与误差分析", "blocks": [{"t": "table", "at": "lo1", "head": ["操作", "后果"], "cols": "2fr 2fr", "rows": [{"at": "lo1", "cells": ["洗涤水太多、用常温水", "{溶解损失}，产率偏低"]}, {"at": "lo2", "cells": ["未洗涤或洗不净", "含杂质，{纯度偏低}"]}, {"at": "lo3", "cells": ["干燥温度太高", "失结晶水或{分解}"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "答题模板", "at": "lo4", "text": "“导致{溶解损失 / 分解 / 含杂质}，使……偏……”"}}} />;
