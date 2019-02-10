import React from "react";
import * as d3 from "d3";
import * as moment from 'moment';
import styled from "styled-components";
import {gray} from "../../constants";

const GraphContainer = styled.div`
  width: 100%;
  height: 100%;
  
  svg {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .tooltip {
  position: absolute;
  text-align: center;
  padding: 5px;
  font-size: 1em;
  font-family: "IBM Plex Sans Condensed", sans-serif;
  background: #13171a;
  border: 1px solid black;
  pointer-events: none;
  color: white;
  transform: translate(797px, 479px);
}
`;

const categories = {
    "Data Science": -2,
    "Dev ops": -1,
    Frontend: 0,
    Backend: 1,
    Languages: 2
};

const projects = [
    // Data science
    {name: "TensorFlow", time: 1, type: -2},
    {name: "Scrapy", time: 6, type: -2},
    {name: "Graph databases", time: 6, type: -2},
    {name: "D3.js", time: 12, type: -2},
    {name: "Panda", time: 3, type: -2},
    // Dev ops
    {name: "Docker", time: 12, type: -1},
    {name: "Docker compose", time: 12, type: -1},
    {name: "Serverless", time: 6, type: -1},
    {name: "Heroku", time: 2, type: -1},
    {name: "Amazon EC2", time: 2, type: -1},
    // Frontend
    {name: "Vue", time: 12, type: 0},
    {name: "Angular", time: 6, type: 0},
    {name: "Jquery", time: 36, type: 0},
    {name: "Bootstrap", time: 24, type: 0},
    {name: "React", time: 24, type: 0},
    {name: "Qt", time: 6, type: 0},
    // Backend
    {name: "Django", time: 24, type: 1},
    {name: "Flask", time: 6, type: 1},
    {name: "Express", time: 12, type: 1},
    {name: "AWS Lambda", time: 7, type: 1},
    {name: "AWS DynamoDb", time: 7, type: 1},
    {name: "AWS Cognito", time: 7, type: 1},
    {name: "Nginx", time: 12, type: 1},
    {name: "Redis", time: 4, type: 1},
    // Languages
    {name: "Neo4j", time: 6, type: 2},
    {name: "Python", time: 84, type: 2},
    {name: "Node", time: 38, type: 2},
    {name: "Mysql", time: 12, type: 2},
    {name: "Php", time: 6, type: 2},
    {name: "Java", time: 12, type: 2},
    {name: "C#", time: 6, type: 2},
    {name: "C++", time: 12, type: 2},
    {name: "C", time: 6, type: 2},
    {name: "TypeScript", time: 7, type: 2}
];

export class FirstPage extends React.Component {
    _rootNode;

    componentDidMount() {
        const width = this._rootNode.clientWidth;
        const height = this._rootNode.clientHeight;

        const rScale = d3
            .scaleSqrt()
            .domain([0, 300])
            .range([10, 120]);

        const svg = d3
            .select(this._rootNode)
            .append("svg")
            .attr("class", "chart")
            .attr("height", height)
            .style("height", height)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const div = d3
            .select(this._rootNode)
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg
            .selectAll("text")
            .data(d3.keys(categories))
            .enter()
            .append("text")
            .text((d) => {
                return d;
            })
            .style("fill", gray)
            .style("text-anchor", "middle")
            .attr("dy", -height / 2 + 30)
            .attr("dx", (d) => {
                return (categories[d] * width) / 7;
            });

        const circles = svg
            .selectAll("circle")
            .data(projects)
            .enter()
            .append("circle")
            .attr("r", (d) => {
                return rScale(d.time);
            })
            .attr("fill", (d) => {
                const colors = [
                    "#ff2e63",
                    "#f4c300",
                    "#222327",
                    "#707070",
                    "blue"
                ];
                return colors[d.type + 2];
            });

        svg
            .selectAll("circle")
            .call(
                d3
                    .drag()
                    .on("drag", () => {
                        d3.event.subject.fx = d3.event.x;
                        d3.event.subject.fy = d3.event.y;
                    })
                    .on("start", () => {
                        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                        d3.event.subject.fx = d3.event.subject.x;
                        d3.event.subject.fy = d3.event.subject.y;
                        div
                            .transition()
                            .duration(200)
                            .style("opacity", 0);
                    })
                    .on("end", () => {
                        if (!d3.event.active) simulation.alphaTarget(0);
                        d3.event.subject.fx = null;
                        d3.event.subject.fy = null;
                    })
            )
            .on("mouseover", (d) => {
                console.log(d3.event);
                div
                    .transition()
                    .duration(200)
                    .style("opacity", 0.9);
                div
                    .html(
                        `${d.name}<br>${moment
                            .duration(d.time, "months")
                            .humanize()} of experience`
                    )
                    .style("left", d3.event.layerX - width/2 + "px")
                    .style("top", d3.event.layerY - height/2 + "px");
            })
            .on("mouseout", () => {
                div
                    .transition()
                    .duration(500)
                    .style("opacity", 0);
            });
        let simulation = d3
            .forceSimulation()
            .force(
                "x",
                d3
                    .forceX((d) => {
                        return (d.type * width) / 7;
                    })
                    .strength(0.3)
            )
            .force("y", d3.forceY(0).strength(0.02))
            .force(
                "collide",
                d3.forceCollide((d) => {
                    return rScale(d.time + 2) + 1;
                })
            );
        simulation.nodes(projects).on("tick", () => {
            circles
                .attr("cx", (d) => {
                    return d.x;
                })
                .attr("cy", (d) => {
                    return d.y;
                });
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
        console.log('render');

        return (
            <GraphContainer ref={this._setRef.bind(this)}/>
        )
    }
}