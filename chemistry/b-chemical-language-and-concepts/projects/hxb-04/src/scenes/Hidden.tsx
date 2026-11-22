import React from 'react';
import {AutoScene} from '../components/auto';

export const Hidden: React.FC = () => <AutoScene k="hidden" d={{"tag": "考点八", "title": "离子共存的隐含条件", "blocks": [{"t": "table", "at": "hi1", "head": ["题目说法", "翻译成"], "cols": "1.4fr 2fr", "rows": [{"at": "hi1", "cells": ["无色溶液", "排除 Cu^2+、Fe^3+、Fe^2+、MnO4^-"]}, {"at": "hi2", "cells": ["酸性（pH < 7、石蕊变红）", "溶液中还有大量 {H^+}"]}, {"at": "hi2", "cells": ["碱性（pH > 7、酚酞变红）", "溶液中还有大量 {OH^-}"]}, {"at": "hi3", "cells": ["与 Al 反应放出 H2", "{可能酸性，也可能碱性|orange}"]}, {"at": "hi4", "cells": ["酸性 + NO3^-", "相当于 {HNO3}，能氧化 Fe^2+、I^-、SO3^2-"]}], "size": 29, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "hi5", "text": "先把隐含条件{翻译成离子}补进选项，再逐对查四类反应"}}} />;
