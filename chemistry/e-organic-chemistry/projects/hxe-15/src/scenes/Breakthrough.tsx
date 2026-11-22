import React from 'react';
import {AutoScene} from '../components/auto';

export const Breakthrough: React.FC = () => <AutoScene k="breakthrough" d={{"tag": "考点七", "title": "推断突破口", "blocks": [{"t": "table", "at": "bt1", "head": ["突破口", "结论"], "cols": "1.6fr 2fr", "rows": [{"at": "bt1", "cells": ["浓硫酸，△", "消去或酯化"]}, {"at": "bt2", "cells": ["银镜反应", "{醛基}"]}, {"at": "bt2", "cells": ["遇 FeCl3 显紫色", "{酚羟基}"]}, {"at": "bt2", "cells": ["与 NaHCO3 放出 CO2", "{羧基}"]}, {"at": "bt3", "cells": ["A → B → C 连续氧化", "{醇 → 醛 → 羧酸}"]}], "size": 30, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "bt4", "text": "连续氧化：{醇 → 醛 → 羧酸}"}}} />;
