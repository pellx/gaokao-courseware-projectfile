import React from 'react';
import {AutoScene} from '../components/auto';

export const Compare: React.FC = () => <AutoScene k="compare" d={{"tag": "考点五", "title": "与静电力的比较", "blocks": [{"t": "table", "at": "e1", "head": ["比较项目", "静电力", "洛伦兹力"], "cols": "1fr 1fr 1fr", "rows": [{"at": "e2", "cells": ["作用对象", "一切电荷", "{运动}电荷"]}, {"at": "e3", "cells": ["条件", "与运动无关", "v 不平行于 B"]}, {"at": "e3", "cells": ["做功", "{可以}做功", "{不}做功"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "易错", "at": "e4", "text": "静止电荷{不受}洛伦兹力"}}} />;
