import React from 'react';
import { Chart } from "react-google-charts";
import { useAtom } from 'jotai';
import { sankeyDataAtom } from '../atoms/allocationAtoms';
import { convertSankeyDataToArray } from '../utils/prepareData';


const SankeyChart: React.FC = () => {
    // Load the allocations state object.
    const [ sankeyData ] = useAtom(sankeyDataAtom);

    // Prepare the data header.
    const header: (string | number)[] = ["From", "To", "Voturi"];

    // Prepare the data array.
    const data = [header, ...convertSankeyDataToArray(sankeyData)];

    // Configure the chart.
    const options = {
        sankey: {
            link: {
                colorMode: 'gradient'
            },
            node: {
                label: {
                    fontName: 'Helvetica',
                    fontSize: 14,
                },
                interactivity: true,
                labelPadding: 10,
                nodePadding: 25,
                width: 20,
                colors: [
                    "#3d5a80",
                    "#92a8d1"
                ]
              }
          }
    };

    return (
        <div className="row control output-graphic justify-content-center">
            <div className="col-12">
                <Chart
                    chartType="Sankey"
                    className="sankey"
                    data={data}
                    width="100%"
                    height="800px"
                    options={options}
                />
            </div>
        </div>
    );
};

export default SankeyChart;
