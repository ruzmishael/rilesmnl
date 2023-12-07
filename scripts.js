mapboxgl.accessToken = 'pk.eyJ1IjoicnV6bWlzaGFlbCIsImEiOiJjbG5yNjUzZTYwb3lmMmpwa200NndlNTNrIn0.DH2ARNo09iLGylY8SuiNwg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/ruzmishael/clpcy5xx0003701pxdgz1fjp7',
            center: [120.95788, 14.58901],
            zoom: 11,
            minZoom: 11,
            maxZoom: 15,
            pitch: 0,
        });

        map.addControl(new mapboxgl.NavigationControl());

        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('load', function () {
            map.addSource('line1', {
                type: 'geojson',
                data: 'line1.geojson'
            });

            map.addSource('line2', {
                type: 'geojson',
                data: 'line2.geojson'
            });

            map.addSource('line3', {
                type: 'geojson',
                data: 'line3.geojson'
            });

            map.addSource('univ_line1', {
                type: 'geojson',
                data: 'univ_line1.geojson'
            });

            map.addSource('univ_line2', {
                type: 'geojson',
                data: 'univ_line2.geojson'
            });

            map.addSource('univ_line3', {
                type: 'geojson',
                data: 'univ_line3.geojson'
            });

            map.loadImage('icon-univ.png', function (error, image) {
                if (error) throw error;
                map.addImage('univ_line-icon', image);
            });
            map.addSource('hospi_line1', {
                type: 'geojson',
                data: 'hospi_line1.geojson'
            });

            map.addSource('hospi_line2', {
                type: 'geojson',
                data: 'hospi_line2.geojson'
            });

            map.addSource('hospi_line3', {
                type: 'geojson',
                data: 'hospi_line3.geojson'
            });

            map.loadImage('icon-hospi.png', function (error, image) {
                if (error) throw error;
                map.addImage('hospi_line-icon', image);
            });

            map.addSource('route_line1', {
                type: 'geojson',
                data: 'route_line1.geojson'
            });

            map.addSource('route_line2', {
                type: 'geojson',
                data: 'route_line2.geojson'
            });

            map.addSource('route_line3', {
                type: 'geojson',
                data: 'route_line3.geojson'
            });
            
            map.addLayer({
                id: 'line1',
                type: 'circle',
                source: 'line1',
                paint: {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['get', 'monthly_ridership'],
                        0, 5,
                        1500000, 35,
                    ],
                    'circle-color': '#ab4e52',
                    'circle-opacity': 0.5,
                    'circle-stroke-color': '#853c3f',
                    'circle-stroke-width': 2
                },
                layout: {
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'line2',
                type: 'circle',
                source: 'line2',
                paint: {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['get', 'monthly_ridership'],
                        0, 5,
                        1500000, 35,
                    ],
                    'circle-color': '#ab4e52',
                    'circle-opacity': 0.5,
                    'circle-stroke-color': '#853c3f',
                    'circle-stroke-width': 2
                    
                },
                layout: {
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'line3',
                type: 'circle',
                source: 'line3',
                paint: {
                    'circle-radius': [
                        'interpolate',
                        ['linear'],
                        ['get', 'monthly_ridership'],
                        0, 5,
                        1500000, 35,
                    ],
                    'circle-color': '#ab4e52',
                    'circle-opacity': 0.5,
                    'circle-stroke-color': '#853c3f',
                    'circle-stroke-width': 2 
                },
                layout: {
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'univ_line1',
                type: 'symbol',
                source: 'univ_line1',
                layout: {
                    'icon-image': 'univ_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'univ_line2',
                type: 'symbol',
                source: 'univ_line2',
                layout: {
                    'icon-image': 'univ_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                }
            });

            map.addLayer({
               id: 'univ_line3',
                type: 'symbol',
                source: 'univ_line3',
                layout: {
                    'icon-image': 'univ_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                },
            });

            map.addLayer({
                id: 'hospi_line1',
                type: 'symbol',
                source: 'hospi_line1',
                layout: {
                    'icon-image': 'hospi_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'hospi_line2',
                type: 'symbol',
                source: 'hospi_line2',
                layout: {
                    'icon-image': 'hospi_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                }
            });

            map.addLayer({
               id: 'hospi_line3',
                type: 'symbol',
                source: 'hospi_line3',
                layout: {
                    'icon-image': 'hospi_line-icon',
                    'icon-size': 0.3,
                    'visibility': 'none'
                },
            });

            map.addLayer({
                id: 'route_line1',
                type: 'line',
                source: 'route_line1',
                paint: {
                    'line-width': 10,
                    'line-color': 'green',
                    'line-opacity': 0.8
                },
                layout: {
                    'visibility': 'none'
                }
            });

            map.addLayer({
                id: 'route_line2',
                type: 'line',
                source: 'route_line2',
                paint: {
                    'line-width': 10,
                    'line-color': 'purple',
                    'line-opacity': 0.8
                },
                layout: {
                    'visibility': 'none'
                }
            });


            map.addLayer({
                id: 'route_line3',
                type: 'line',
                source: 'route_line3',
                paint: {
                    'line-width': 10,
                    'line-color': 'blue',
                    'line-opacity': 0.8
                },
                layout: {
                    'visibility': 'none'
                }
            });

            map.on('mouseenter', 'line1', function (e) {
                var stationName = e.features[0].properties.StationName;
                var monthlyRidership = e.features[0].properties.monthly_ridership;
                var year= e.features[0].properties.year;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + stationName + '</h5>' +
                    '<p>Average Monthly Ridership: ' + monthlyRidership + '</p>' +
                    '<p>Year: ' + year + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });

            map.on('mouseleave', 'line1', function () {
                popup.remove();
            });

            map.on('mouseenter', 'line2', function (e) {
                var stationName = e.features[0].properties.StationName;
                var monthlyRidership = e.features[0].properties.monthly_ridership;
                var year= e.features[0].properties.year;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + stationName + '</h5>' +
                    '<p>Average Monthly Ridership: ' + monthlyRidership + '</p>' +
                    '<p>Year: ' + year + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });


            map.on('mouseleave', 'line2', function () {
                popup.remove();
            });

            map.on('mouseenter', 'line3', function (e) {
                var stationName = e.features[0].properties.StationName;
                var monthlyRidership = e.features[0].properties.monthly_ridership;
                var year= e.features[0].properties.year;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + stationName + '</h5>' +
                    '<p>Average Monthly Ridership: ' + monthlyRidership + '</p>' +
                    '<p>Year: ' + year + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });

            map.on('mouseleave', 'line3', function () {
                popup.remove();
            });

            map.on('mouseenter', 'line1', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseenter', 'line2', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseenter', 'line3', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'line1', function () {
                map.getCanvas().style.cursor = '';
            });

            map.on('mouseleave', 'line2', function () {
                map.getCanvas().style.cursor = '';
            });

            map.on('mouseleave', 'line3', function () {
                map.getCanvas().style.cursor = '';
            });
            map.on('mouseenter', 'univ_line1', function (e) {
                var universityName = e.features[0].properties.university;
                var address = e.features[0].properties.address;
        
                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + universityName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
    
            map.on('mouseleave', 'univ_line2', function () {
                popup.remove();
                });
            map.on('mouseenter', 'univ_line2', function (e) {
                var universityName = e.features[0].properties.university;
                var address = e.features[0].properties.address;
        
                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + universityName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
        
            map.on('mouseleave', 'univ_line3', function () {
                popup.remove();
                });
            map.on('mouseenter', 'univ_line3', function (e) {
                var universityName = e.features[0].properties.university;
                var address = e.features[0].properties.address;
        
                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + universityName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '</div>';
            
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
        
            map.on('mouseleave', 'univ_line1', function () {
                popup.remove();
            });
            map.on('mouseenter', 'hospi_line1', function (e) {
                var hospitalName = e.features[0].properties.hospital;
                var address = e.features[0].properties.address;
                var pubpriv = e.features[0].properties.designation;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + hospitalName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '<p>Type: ' + pubpriv + '</p>' +
                    '</div>';
                
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
    
            map.on('mouseleave', 'hospi_line1', function () {
                popup.remove();
                });
            map.on('mouseenter', 'hospi_line2', function (e) {
                var hospitalName = e.features[0].properties.hospital;
                var address = e.features[0].properties.address;
                var pubpriv = e.features[0].properties.designation;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + hospitalName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '<p>Type: ' + pubpriv + '</p>' +
                    '</div>';
                
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
        
            map.on('mouseleave', 'hospi_line2', function () {
                popup.remove();
                });
            map.on('mouseenter', 'hospi_line3', function (e) {
                var hospitalName = e.features[0].properties.hospital;
                var address = e.features[0].properties.address;
                var pubpriv = e.features[0].properties.designation;

                var popupContent = '<div class="custom-popup">' +
                    '<h5>' + hospitalName + '</h5>' +
                    '<p>City: ' + address + '</p>' +
                    '<p>Type: ' + pubpriv + '</p>' +
                    '</div>';
                
                popup.setLngLat(e.lngLat)
                    .setHTML(popupContent)
                    .addTo(map);
            });
        
            map.on('mouseleave', 'hospi_line3', function () {
                popup.remove();
            });
        });

        function updateTextBoxContent(lineId) {
            let content = '';
            switch (lineId) {
                case 'line1':
                    content = '<h2>LRT-1 (1984)</h2>' +
                        '<p>The Light Rail Transit Line 1 (LRT-1) in Metro Manila, inaugurated in 1984 as the first rapid transit line in the Philippines and Southeast Asia, connects the northern and southern parts of the metro, serving millions of commuters. Stretching 20.7 kilometers with 20 stations, LRT-1 links key areas like Baclaran, Pasay, Makati, Manila, and Caloocan, playing a crucial role in reducing traffic congestion and providing affordable transportation.</p>' +
                        '<img src="lrt1.jpg" alt="LRT-1 First Gen Train" style="width: 100%; height: auto;">'+
                        '<p>Significantly contributing to the Metro Manila&#39;s public transportation system, LRT-1 has undergone expansions and improvements over the years. Notable nearby establishments include shopping malls, educational institutions, government offices, and cultural sites. The ongoing Cavite extension project aims to further enhance LRT-1&#39;s reach, connecting more communities and addressing the growing population&#39;s transportation needs.</p>' +
                        '<img src="graph_lrt1.png" alt="LRT-1 Ridership" style="width: 100%; height: auto;">'+
                        '<p>Despite challenges such as overcrowding and maintenance issues, discussions on modernization and expansion are in progress. Initiatives focus on improving passenger experience, enhancing safety measures, and implementing technology upgrades for the long-term sustainability and efficiency of LRT-1. It remains a vital component of Metro Manila&#39;s transit system, fostering economic activities and enhancing urban connectivity.</p>';
                    break;
               case 'line2':
                    content = '<h2>LRT-2 (2003)</h2>' +
                        '<p>The Light Rail Transit Line 2 (LRT-2) in Metro Manila, Philippines, has been crucial in enhancing the metro&#39;s public transportation system. Opened in 2003, the LRT-2 was designed to connect the eastern parts of Metro Manila, specifically the districts of Quezon City, Marikina, and Pasig, providing a faster and more efficient means of transportation for residents in these areas.</p>' +
                        '<img src="lrt2.jpg" alt="LRT-2 or the Megatren" style="width: 100%; height: auto;">'+
                        '<p>The 17.6-kilometer line initially ran from Santolan in Pasig to Recto Avenue in Manila, passing through key areas such as the University Belt and other educational establishments along the way. The LRT-2 has been a lifeline for students and commuters, reducing travel time and offering a reliable mode of transportation in a densely populated and traffic-prone region.</p>'+
                        '<img src="graph_lrt2.png" alt="LRT-2 or the Megatren" style="width: 100%; height: auto;">'+
                        '<p>In recent years, the LRT-2 underwent a significant extension project that expanded its reach further eastward. The extension added two new stations, Antipolo and Marikina, providing improved accessibility for residents in these areas. This extension not only addressed the growing transportation needs of the local population but also connected more commuters to the wider Metro Manila rail network, facilitating smoother and more seamless journeys across the city. The extended LRT-2 has become an even more integral part of the daily lives of the people in the eastern parts of Metro Manila, offering a vital link to education, employment, and various services in the bustling metropolis.</p>';
                    break;
                case 'line3':
                    content = '<h2>MRT-3 (1999)</h2>' +
                        '<p>The Manila Metro Rail Transit System Line 3 (MRT-3) was launched in December 1999. It was envisioned as a solution to the traffic issues in  Metro Manila. Its route extends from North Avenue in Quezon City to Taft Avenue in Pasay City, passing through major business districts like Cubao, Ortigas, BGC, and Makati. This 16.9-kilometer stretch serves as a lifeline for millions of commuters, offering a faster and more efficient alternative to navigating the congested roads of Metro Manila..</p>' +
                        '<img src="mrt3.jpg" alt="MRT-3 train" style="width:100%; height: auto;">'+
                        '<p>The MRT-3 provides a swift means of travel for daily commuters, reducing vehicular traffic, addressing environmental concerns, and promoting economic productivity by facilitating easier access to key commercial and business hubs.</p>'+
                        '<img src="graph_mrt3.png" alt="Ridership Graph" style="width:100%; height: auto;">'+
                        '<p>In recent years, the MRT-3 underwent a comprehensive rehabilitation program to address longstanding issues related to safety and reliability. This initiative aimed to upgrade and modernize key components of the system, including infrastructure, signaling systems, and train fleets. The successful rehabilitation of the MRT-3 is crucial not just for its immediate users but for the overall health and sustainability of Metro Manila&#39;s transportation network, positioning it as a model for future urban transit development in the region.</p>';
                    break;
                case 'all':
                    content = '<h2>Importance</h2>' +
                        '<p>Metro Manila&#39;s Mass Rail Transit System serves as a crucial component of the city&#39;s transportation infrastructure, aiming to alleviate the persistent issue of traffic congestion. Despite its importance, the system faces challenges such as overcapacity, frequent breakdowns, and insufficient maintenance, leading to discomfort and delays for passengers. However, there is optimism for the future as ongoing efforts involve the construction of new lines and the near completion of others. These initiatives signify a commitment to improving the mass transit system, addressing its current limitations, and extending the reach of efficient public transportation. These expansions hold the potential to significantly ease traffic congestion, enhance commuter experiences, and contribute to the overall livability of Metro Manila.</p>' +
                        '<img src="linechart.png" alt="Ridership Graph" style="width:100%; height: auto;">'+
                        '<p>Encouragingly, as the metro evolves, investments in these projects offer hope for a more accessible and interconnected urban landscape. The imminent completion of new lines reflects a strategic approach to tackle the challenges of the existing system, providing a foundation for a more robust and reliable mass transit network. The expansion addresses the strain on current routes. It promises to extend the convenience of public transportation to more areas, ultimately contributing to a more efficient and interconnected urban mobility system. With these developments, there is anticipation that Metro Manila&#39;s Mass Rail Transit System will play a pivotal role in shaping the national capital region&#39;s transportation future, offering a sustainable solution to alleviate traffic congestion and enhance its residents&#39; overall quality of life.</p>';
                    break;
                default:
                    content = '<h2>Riles MNL</h2><p>Default information...</p>';
            }

            document.querySelector('.text-box').innerHTML = content;
        }
        
        function toggleLine(lineId) {
    let zoomLevel, centerCoordinates, pitch, buttonColor, lineLayerId, univLineLayerId, hospiLineLayerId, routeLayerId;

    switch (lineId) {
        case 'line1':
            zoomLevel = 12.15;
            centerCoordinates = [120.96509, 14.57425];
            pitch = 40;
            buttonColor = 'green';
            lineLayerId = 'line1';
            univLineLayerId = 'univ_line1';
            hospiLineLayerId = 'hospi_line1';
            routeLayerId = 'route_line1';
            break;
        case 'line2':
            zoomLevel = 12.21;
            centerCoordinates = [121.01896, 14.60391];
            pitch = 40;
            buttonColor = 'purple';
            lineLayerId = 'line2';
            univLineLayerId = 'univ_line2';
            hospiLineLayerId = 'hospi_line2';
            routeLayerId = 'route_line2';
            break;
        case 'line3':
            zoomLevel = 12.12;
            centerCoordinates = [120.99579, 14.57678];
            pitch = 40;
            buttonColor = 'blue';
            lineLayerId = 'line3';
            univLineLayerId = 'univ_line3';
            hospiLineLayerId = 'hospi_line3';
            routeLayerId = 'route_line3';
            break;
        default:
            zoomLevel = 10.45;
            centerCoordinates = [120.95607, 14.58194];
            pitch = 0;
            buttonColor = '';
            lineLayerId = '';
            univLineLayerId = '';
            hospiLineLayerId = '';
    }

    map.flyTo({
        center: centerCoordinates,
        zoom: zoomLevel,
        pitch: pitch,
        essential: true
    });

    // Show the selected line layer and its associated university layer
    map.setLayoutProperty('line1', 'visibility', 'none');
    map.setLayoutProperty('line2', 'visibility', 'none');
    map.setLayoutProperty('line3', 'visibility', 'none');
    map.setLayoutProperty('univ_line1', 'visibility', 'none');
    map.setLayoutProperty('univ_line2', 'visibility', 'none');
    map.setLayoutProperty('univ_line3', 'visibility', 'none');
    map.setLayoutProperty('hospi_line1', 'visibility', 'none');
    map.setLayoutProperty('hospi_line2', 'visibility', 'none');
    map.setLayoutProperty('hospi_line3', 'visibility', 'none');
    map.setLayoutProperty('route_line1', 'visibility', 'none');
    map.setLayoutProperty('route_line2', 'visibility', 'none');
    map.setLayoutProperty('route_line3', 'visibility', 'none');

    map.setLayoutProperty(lineLayerId, 'visibility', 'visible');
    map.setLayoutProperty(univLineLayerId, 'visibility', 'visible');
    map.setLayoutProperty(hospiLineLayerId, 'visibility', 'visible');
    map.setLayoutProperty(routeLayerId, 'visibility', 'visible');

    document.querySelectorAll('.btn-line').forEach(function (btn) {
        btn.classList.remove('active');
        btn.style.backgroundColor = '#ccc';
    });

    var activeButton = document.querySelector('.btn-line-' + lineId);
    activeButton.classList.add('active');
    activeButton.style.backgroundColor = buttonColor;
    updateTextBoxContent(lineId);
}

function toggleAllLines() {
    var defaultZoom = 11.54;
    var defaultCenter = [120.98155, 14.5891];
    var defaultPitch = 0;

    map.flyTo({
        center: defaultCenter,
        zoom: defaultZoom,
        pitch: defaultPitch,
        essential: true
    });

    map.setLayoutProperty('line1', 'visibility', 'visible');
    map.setLayoutProperty('line2', 'visibility', 'visible');
    map.setLayoutProperty('line3', 'visibility', 'visible');
    map.setLayoutProperty('univ_line1', 'visibility', 'visible');
    map.setLayoutProperty('univ_line2', 'visibility', 'visible');
    map.setLayoutProperty('univ_line3', 'visibility', 'visible');
    map.setLayoutProperty('hospi_line1', 'visibility', 'visible');
    map.setLayoutProperty('hospi_line2', 'visibility', 'visible');
    map.setLayoutProperty('hospi_line3', 'visibility', 'visible');
    map.setLayoutProperty('route_line1', 'visibility', 'visible');
    map.setLayoutProperty('route_line2', 'visibility', 'visible');
    map.setLayoutProperty('route_line3', 'visibility', 'visible');

    document.querySelectorAll('.btn-line').forEach(function (btn) {
        btn.classList.remove('active');
        btn.style.backgroundColor = '#ccc';
    });

    var allLinesButton = document.querySelector('.btn-line-all');
    allLinesButton.classList.add('active');
    allLinesButton.style.backgroundColor = 'black';
    updateTextBoxContent('all');

}

function proceedToNextPart() {
        window.location.href = 'dash.html';
    }