# find -name build.xml | awk -F"/" '$0 !~ /infuser/ {print "ant clean -f "$0}' | sh
# find -name build.xml | awk -F"/" '$0 ~ /infuser/ {print "ant clean -f "$0}' | sh

MASTER_PATH=wukong/master
GW_PATH=wukong/gateway
DEVICE_PATH=wukong/gateway/udpwkpf

rm $MASTER_PATH/*.json
rm $MASTER_PATH/*.pyc
rm $MASTER_PATH/change*
rm $GW_PATH/*.json
rm $GW_PATH/*.pyc
rm $GW_PATH/device*
rm $DEVICE_PATH/*.json
rm $DEVICE_PATH/*.pyc
