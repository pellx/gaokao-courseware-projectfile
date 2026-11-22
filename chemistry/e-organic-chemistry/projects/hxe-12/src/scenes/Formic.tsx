import React from 'react';
import {AutoScene} from '../components/auto';

export const Formic: React.FC = () => <AutoScene k="formic" d={{"tag": "考点八", "title": "甲酸与甲酸酯", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "甲酸", "at": "fo1", "text": "酸性 + {银镜反应}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "甲酸酯", "at": "fo2", "text": "水解 + {银镜反应}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "fo4", "text": "能发生银镜反应：醛、{甲酸、甲酸盐、甲酸酯}、葡萄糖、麦芽糖", "size": 31, "center": true}], "callout": {"label": "易错", "at": "fo4", "text": "银镜反应{不只醛}：还有甲酸系列和还原糖"}}} />;
